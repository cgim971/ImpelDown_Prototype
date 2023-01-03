using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Grenade : MonoBehaviour
{
    private Vector3 mousePos;
    private Rigidbody2D rb;
    public GameObject circle;
    public float force;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        Vector3 direction = mousePos - transform.position;
        Vector3 rotation = transform.position - mousePos;
        rb.velocity = new Vector2(direction.x, direction.y).normalized * force;
        float rot = Mathf.Atan2(rotation.y, rotation.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.Euler(0, 0, rot + 90);
        StartCoroutine(Boom());
    }

    // 사거리 
    // 벽
    // 플레이어

    IEnumerator Boom()
    {
        yield return new WaitForSeconds(1f);
        GameObject tmp = Instantiate(circle, this.transform);
        tmp.transform.SetParent(null);
        Destroy(gameObject);
    }
}

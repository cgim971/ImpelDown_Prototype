using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShootGrenade : MonoBehaviour
{
    public GameObject grenade;
    private Quaternion grenadeRot;
    void Update()
    {
        Vector2 len = Camera.main.ScreenToWorldPoint(Input.mousePosition) - transform.position;
        float z = Mathf.Atan2(len.y, len.x) * Mathf.Rad2Deg;
        grenadeRot = Quaternion.Euler(0, 0, z);
        if(Input.GetMouseButtonDown(1))
        {
            Instantiate(grenade, transform.position, grenadeRot);
        }
    }
}

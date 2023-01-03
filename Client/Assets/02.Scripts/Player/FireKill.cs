using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class FireKill : MonoBehaviour
{
    private Vector3 firekillerPos = Vector3.zero;

    public static UnityEvent _fireTrigger;

    [SerializeField] private List<FireKillerItem> fireKillerList;
    void Start()
    {
        FireKillerItem[] obj = GameObject.Find("FireGroup").GetComponentsInChildren<FireKillerItem>();
        foreach(FireKillerItem item in obj)
        {
            fireKillerList.Add(item);
        }
    }
    void Update()
    {
        Vector3 _playerPos = this.transform.position;
        Collider2D[] coll = Physics2D.OverlapCircleAll(transform.position, 1f);

        foreach (FireKillerItem obj in fireKillerList)
        {
            obj.IsMe = false;
            if (coll.Length>1)
            {
                if (coll[1]?.name == obj.name)
                {
                    obj.IsMe = true;
                }
                else
                {
                    obj.IsMe = false;
                }
            }
        }
    }
}

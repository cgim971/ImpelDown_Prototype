using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorOnCollider : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.CompareTag("Player"))
        {
            gameObject.GetComponentInParent<DoorAnimated>().doorable = true;
        }
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            gameObject.GetComponentInParent<DoorAnimated>().doorable = false;
        }
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SlowCircle : MonoBehaviour
{
    public void OnTriggerStay2D(Collider2D collision)
    {
        if(collision.CompareTag("Player"))
        {
            collision.GetComponent<PlayerMove>().SetSpeed(1f);
        }
    }

    public void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            collision.GetComponent<PlayerMove>().SetSpeed();
        }
    }
}

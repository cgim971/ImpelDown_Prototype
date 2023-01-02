using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SlowCircle : MonoBehaviour
{
    public void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.CompareTag("Player"))
        {
            collision.GetComponent<PlayerMove>()._speed = 1f;
        }
    }

    public void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            collision.GetComponent<PlayerMove>()._speed = 5f;
        }
    }
}

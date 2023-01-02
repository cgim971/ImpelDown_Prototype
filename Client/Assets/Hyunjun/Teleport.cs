using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Teleport : MonoBehaviour
{
    public Transform teleportPos;

    public void OnTriggerEnter2D(Collider2D other)
    {
        if(other.CompareTag("Player"))
        {
            if (gameObject.GetComponentInParent<TeleportManager>().isTeleport)
                return;
            other.transform.position = teleportPos.position;
            StartCoroutine(gameObject.GetComponentInParent<TeleportManager>().TimeTeleport());
        }
    }
}

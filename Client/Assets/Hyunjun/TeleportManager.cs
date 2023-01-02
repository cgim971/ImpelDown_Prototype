using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TeleportManager : MonoBehaviour
{
    public bool isTeleport = false;

    public IEnumerator TimeTeleport()
    {
        isTeleport = true;
        yield return new WaitForSeconds(10f);
        isTeleport = false;
    }
}

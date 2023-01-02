using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorTriggerButton : MonoBehaviour
{
    [SerializeField]
    private DoorAnimated door;

    private void Update()
    {
        if(Input.GetKeyDown(KeyCode.F))
        {
            door.CtrlDoor();
        }
    }
}

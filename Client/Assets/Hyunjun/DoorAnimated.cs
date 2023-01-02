using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorAnimated : MonoBehaviour
{
    private Animator animator;
    public bool doorable = false;
    public bool open = false;

    public void Awake()
    {
        animator = GetComponent<Animator>();
    }

    public void CtrlDoor()
    {
        if (!doorable)
            return;
        if(!open)
        {
            animator.SetBool("Open", true);
            open = true;
        }
        else
        {
            animator.SetBool("Open", false);
            open = false;
        }
    }
}

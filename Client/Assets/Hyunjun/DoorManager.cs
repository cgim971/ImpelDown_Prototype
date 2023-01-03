using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorManager : MonoBehaviour
{

    [SerializeField] List<DoorAnimated> _doorAnimatedList = new List<DoorAnimated>();


    private void Start()
    {
        StartCoroutine(StartDoor());
    }

    IEnumerator StartDoor()
    {
        while (true)
        {
            float delay = Random.Range(5f, 8f);
            yield return new WaitForSeconds(delay);

            int random = Random.Range(0, _doorAnimatedList.Count);

            _doorAnimatedList[random].CtrlDoor();
        }
    }


}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TailController : MonoBehaviour
{
    private PlayerController _playerController;
    public void Init(PlayerController playerController)
    {
        _playerController = playerController;
    }
}

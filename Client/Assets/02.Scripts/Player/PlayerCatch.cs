using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerCatch : MonoBehaviour
{
    private PlayerController _playerController;

    private LayerMask _playerLayerMask;
    private Camera _mainCam = null;

    public void Init(PlayerController playerController)
    {
        _playerController = playerController;

        _playerLayerMask = LayerMask.GetMask("Player");
        _mainCam = Camera.main;
    }

    public void CheckInput()
    {
        Catch();
    }

    private void Catch()
    {
        if (!Input.GetMouseButtonDown(0)) return;

        Vector3 worldMousePos = _mainCam.ScreenToWorldPoint(Input.mousePosition);
        worldMousePos.z = 0;
        Vector3 delta = worldMousePos - transform.position;
        delta.Normalize();

        _playerController.SetAnimation(AnimationState.CATCH);


        RaycastHit2D[] players = Physics2D.RaycastAll(transform.position, delta, 1.5f, _playerLayerMask);
        foreach (RaycastHit2D player in players)
        {
            int playerId = player.transform.GetComponentInParent<PlayerController>().PlayerId;
            if (playerId == _playerController.PlayerId) continue;

            C_CaughtReport caughtReport = new C_CaughtReport
            {
                PlayerId = _playerController.PlayerId,
                CaughtPlayerId = playerId
            };

            NetworkManager.Instance.RegisterSend((ushort)MSGID.CCaughtReport, caughtReport);
            break;
        }
    }
}

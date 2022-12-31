using Google.Protobuf;
using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SDeadHandler : IPacketHandler
{
    public void Process(IMessage packet)
    {
        S_Dead msg = packet as S_Dead;

        PlayerController player = PlayerManager.Instance.GetRemotePlayer(msg.PlayerId);


        if (player == null)
        {
            GameObject.Destroy(GameManager.Instance.Player);
            NetworkManager.Instance.Disconnect();
            Application.Quit();

            Debug.Log("³Ê Á×¾î");
            return;
        }
        else
        {
            PlayerManager.Instance.RemoveRemotePlayer(msg.PlayerId);

            GameObject.Destroy(player.gameObject);
            Debug.Log("´Ù¸¥ ¾Ö°¡ Á×¾î");
            return;
        }
    }
}

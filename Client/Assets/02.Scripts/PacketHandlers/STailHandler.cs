using Google.Protobuf;
using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class STailHandler : IPacketHandler
{
    public void Process(IMessage packet)
    {
        S_Tail msg = packet as S_Tail; 

        PlayerController player = PlayerManager.Instance.GetRemotePlayer(msg.PlayerId);

        if(player == null)
        {
            player = GameManager.Instance.Player;
        }

        player.SetTailColor(msg.TailNo);
    }
}

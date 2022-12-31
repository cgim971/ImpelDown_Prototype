using Google.Protobuf;
using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SCaughtConfirmHandler : IPacketHandler
{
    public void Process(IMessage packet)
    {
        S_CaughtConfirm msg = packet as S_CaughtConfirm;

        PlayerController player = PlayerManager.Instance.GetRemotePlayer(msg.PlayerId);



        C_Dead cDead = new C_Dead { PlayerId = msg.PlayerId };
        NetworkManager.Instance.RegisterSend((ushort)MSGID.CDead, cDead);
    }
}

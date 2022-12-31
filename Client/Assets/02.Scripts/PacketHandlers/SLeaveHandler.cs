using Google.Protobuf;
using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SLeaveHandler : IPacketHandler
{
    public void Process(IMessage packet)
    {
        S_Leave msg = packet as S_Leave;
        PlayerManager.Instance.RemoveRemotePlayer(msg.PlayerId);
    }
}

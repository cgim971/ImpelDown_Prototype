using Google.Protobuf;
using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SCaughtConfirmHandler : IPacketHandler
{
    public void Process(IMessage packet)
    {
        S_Caught_CONFIRM msg = packet as S_Caught_CONFIRM;


    }
}

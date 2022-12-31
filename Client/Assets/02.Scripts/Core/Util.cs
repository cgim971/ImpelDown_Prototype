using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public struct PositionData
{
    public Vector3 pos;
    public bool flipX;
}

public class Util
{
    public static PositionData ChangePositionInfo(Position info)
    {
        PositionData data = new PositionData
        {
            pos = new Vector3(info.X, info.Y, 0),
            flipX = info.FlipX
        };
        return data;
    }
}

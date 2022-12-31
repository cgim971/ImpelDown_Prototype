using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum AnimationState
{
    IDLE,
    RUN,
    CATCH,
    DEAD
}


public class Define
{
    public static Color GetColor(int tailNo)
    {
        switch (tailNo)
        {
            case 0: return Color.red;
            case 1: return new Color(255, 165, 0);
            case 2: return Color.yellow;
            case 3: return Color.green;
            case 4: return Color.blue;
            case 5: return new Color(5, 5, 128);
            case 6: return new Color(100, 55, 158);
        }
        return Color.white;
    }
}

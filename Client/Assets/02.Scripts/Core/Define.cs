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
            case 1: return Color.red;
            case 2: return new Color(255, 115, 0);
            case 3: return Color.yellow;
            case 4: return Color.green;
            case 5: return Color.blue;
            case 6: return new Color(28, 0, 77);
            case 7: return new Color(150, 0, 255);
        }
        return Color.white;
    }
}

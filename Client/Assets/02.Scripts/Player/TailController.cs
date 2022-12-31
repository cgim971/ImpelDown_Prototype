using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static Define;

public class TailController : MonoBehaviour
{
    private PlayerController _playerController;

    public Transform TailTs => _tailTs;
    private Transform _tailTs;
    SpriteRenderer _spriteRenderer;

    public void Init(PlayerController playerController)
    {
        _playerController = playerController;

        _tailTs = transform.Find("Tail");
        _spriteRenderer = _tailTs.GetComponent<SpriteRenderer>();
    }

    public void SetTail(int tailNo) => _spriteRenderer.color = GetColor(tailNo);
}

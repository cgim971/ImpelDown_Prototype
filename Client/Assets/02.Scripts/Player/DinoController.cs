using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DinoController : MonoBehaviour
{

    public Transform DinoTs => _dinoTs;
    private Transform _dinoTs;
    private PlayerController _playerController;
    private SpriteRenderer _spriteRenderer;
    private Animator _animator;

    public void Init(PlayerController playerController)
    {
        _dinoTs = transform.Find("Dino");

        _playerController = playerController;

        _spriteRenderer = _dinoTs.GetComponent<SpriteRenderer>();
        _animator = _dinoTs.GetComponent<Animator>();
    }

    public void SetFlipX(bool flipX = false) => _spriteRenderer.flipX = flipX;

    public void SetAnimator(AnimationState state)
    {
        switch (state)
        {
            case AnimationState.IDLE:
                IdleState();
                break;
            case AnimationState.RUN:
                RunState();
                break;
        }
    }

    void IdleState()
    {
        _animator.SetBool("move", false);
    }

    void RunState()
    {
        _animator.SetBool("move", true);
    }

    void CatchState()
    {

    }

    void DeathState()
    {

    }
}

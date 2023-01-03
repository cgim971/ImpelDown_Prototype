using ImpelDown.Proto.Prototype;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : NetworkObject
{
    public bool IsRemote => _isRemote;
    bool _isRemote = false;

    public Rigidbody2D Rigidbody => _rigidbody;
    private Rigidbody2D _rigidbody;

    public DinoController DinoController => _dinoController;
    private DinoController _dinoController;

    public TailController TailController => _tailController;
    private TailController _tailController;

    private PlayerMove _playerMove;

    private PlayerCatch _playerCatch;

    public PlayerSO PlayerSO => _playerSO;
    [SerializeField] private PlayerSO _playerSO;


    bool _flipX = false;
    float _width = 0;

    private void Awake()
    {
        _rigidbody = GetComponent<Rigidbody2D>();
        _playerMove = GetComponent<PlayerMove>();
        _playerCatch = GetComponent<PlayerCatch>();
        _dinoController = GetComponent<DinoController>();
        _tailController = GetComponent<TailController>();

        _playerMove.Init(this);
        _playerCatch.Init(this);
        _dinoController.Init(this);
        _tailController.Init(this);

        _width = Screen.width / 2;
    }

    public void SetUp(bool isPlayer, int playerId)
    {
        _isRemote = !isPlayer;
        PlayerId = playerId;

        SetTailColor(playerId);

        if (_isRemote == false)
        {
            StartCoroutine(SendPositionAndRotation());
        }
    }

    private void Update()
    {
        if (IsRemote == false)
        {
            _playerMove.CheckInput();
            _playerCatch.CheckInput();
            LookMouse();
            PlayAnimation();
        }
    }

    public void LookMouse()
    {
        float x = Input.mousePosition.x;
        _flipX = (x == _width ? _flipX : x > _width ? false : true);

        _dinoController.SetFlipX(_flipX);
    }

    public void PlayAnimation()
    {
        if (_rigidbody.velocity.magnitude > 0)
        {
            _dinoController.SetAnimator(AnimationState.RUN);
        }
        else
        {
            _dinoController.SetAnimator(AnimationState.IDLE);
        }
    }

    public void SetAnimation(AnimationState state)
    {
        _dinoController.SetAnimator(state);
    }

    public void SetPositionData(PositionData positionData, bool isImmediate = false)
    {
        _dinoController.SetFlipX(positionData.flipX);
        _playerMove.SetPositionData(positionData.pos, isImmediate);
    }

    public void SetTailColor(int tailNo)
    {
        _tailController.SetTail(tailNo);
    }

    private IEnumerator SendPositionAndRotation()
    {
        Position position = new Position();

        while (gameObject.activeSelf)
        {
            yield return new WaitForSeconds(0.04f);

            Vector2 pos = transform.position;

            position.X = pos.x;
            position.Y = pos.y;
            position.FlipX = _flipX;

            C_Move cMove = new C_Move { PlayerId = PlayerId, Position = position };

            NetworkManager.Instance.RegisterSend((ushort)MSGID.CMove, cMove);
        }
    }
}
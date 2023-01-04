using Google.Protobuf.WellKnownTypes;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.U2D;

public class FireKillerItem : MonoBehaviour
{
    [SerializeField]
    private bool _isMe = false;
    [SerializeField]
    private bool isCollision = false;
    [SerializeField] private bool isOn = false;

    Color _blue = new Color(0f, 0f, 1f, 0.2f);
    Color _red = new Color(1f, 0f, 0f, 0.2f);
    public bool IsMe
    {
        get { return _isMe; }
        set { _isMe = value; }
    }

    private GameObject _player;

    private Vector2 _dir;

    float dotValue = 0f;
    private void Start()
    {
        _player = GameObject.Find("Player");
        Debug.Log(_player);
    }

    void Update()
    {
        if(Input.GetKey(KeyCode.Space))
        {
            isOn = true;
        }
        else
        {
            isOn = false;
        }

        if(isOn)
        {
            GetComponentInChildren<SpriteRenderer>().enabled = true;
        }
        else
        {
            GetComponentInChildren<SpriteRenderer>().enabled = false;
        }
        _dir = transform.position - _player.transform.position;
        float angle = Quaternion.FromToRotation(-_dir, Vector2.right).eulerAngles.z;
        Debug.Log(360 - angle);
        transform.rotation = Quaternion.Euler(0,0, 180 - angle);
    }
    

    public void Fire(Vector3 dir)
    {
        Debug.Log(dir.normalized);
    }
}

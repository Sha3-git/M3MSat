using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
   [SerializeField]
    Rigidbody2D player;

    bool onGround = false;
    public float jumpVal;

    // Start is called before the first frame update
    void Start()
    {
      player = GetComponent<Rigidbody2D>();   
    }

    // Update is called once per frame
    void Update()
    {
        playerJump();
    }

    public void playerJump()
    {
        if(Input.GetKeyDown(KeyCode.Space) && onGround == true)
        {
            player.AddForce(Vector2.up * jumpVal);
            onGround = false;
        }
    }

    private void OnCollisionEnter2D(Collision2D other) {
        if(other.gameObject.CompareTag("ground"))
        {
             onGround = (onGround == false)? true : false;
        }
    }
}
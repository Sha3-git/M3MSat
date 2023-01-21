using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstacle : MonoBehaviour
{
    [SerializeField]
    //public GameObject spike;
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        //spawn();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

   private void OnCollisionEnter2D(Collision2D other) {
        if(other.gameObject.CompareTag("Untagged"))
        {
            Debug.Log("point");
        }
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstacle : MonoBehaviour
{
    [SerializeField]
    public GameObject spike;
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        spawn();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void spawn()
    {
       GameObject spikeSpawn  = Instantiate(spike, transform.position, transform.rotation);
       //spim
    }
}

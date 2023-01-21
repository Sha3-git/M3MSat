using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Points : MonoBehaviour
{
    [SerializeField]
    
    public Text pointsText;

    public int points;
    // Start is called before the first frame update
    void Start()
    {
        points = 10;
        pointsText.text = "0";
    }

    // Update is called once per frame
    void Update()
    {
       pointsText.text = points.ToString();
    }
    
    public void showFact(){
         if(points == 5)
        {

        }
    }
    public void save() {
        PlayerPrefs.SetInt("point", points);
    }
     private void OnCollisionEnter2D(Collision2D other) {
        if(other.gameObject.CompareTag("point"))
        {
            // onGround = (onGround == false)? true : false;
        }
    }
}

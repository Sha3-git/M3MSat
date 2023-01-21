using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Points : MonoBehaviour
{
    public GameObject m;
    private Movement movement;
    
    [SerializeField]
    
    public Text pointsText;

    public int points;
    string[] fact = {"Two-thirds of British Columbia’s land base is forested land.","The wettest city in Canada is Prince Rupert, located about halfway up BC’s west coast",
     "World’s largest blue whale skeleton is in BC", "The Sea to Sky Highway that connects Vancouver to Whistler is one of the most scenic highways in the world. The 110 km long highway offers visitors a variety of outdoor experiences",
     "Della Falls located in Strathcona Provincial Park on Vancouver Island constitute the highest waterfalls in Canada.", 
     "Steller's jay is the provincial bird of British Columbia.", "Seagulls are omnivorous and eat a wide variety of foods, including fish and marine and freshwater invertebrates, both alive and already dead, terrestrial arthropods and invertebrates, plant items, and even other birds.",
     "In Vancouver, BC's most populous city, this unique temperate rainforest is often thought to be the reason behind our city's yearly average of 169 rain days and the nickname, Raincouver.", "BC is the only Canadian province that borders the Pacific Ocean and has a coastline that stretches more than 27,000 km (17,000 miles).",
     "BC has three Unesco World Heritage Sites, six National Parks,  and over 400 provincial parks, recreation, and conservation areas.",
     "BC is dominated by mountain ranges including the Canadian Rockies, the Coast Mountains, Cassiar Mountains, and the Columbia Mountains. Mount Fairweather is the highest mountain with an elevation of 4,671 m (15,325 ft) above sea level.",
     "The world’s largest fly-fishing rod can be found in Houston, British Columbia. The world’s largest fly rod stands 60 feet high and weighs about 800 pounds, and is illuminated at night.",
     "Along the wild Pacific coast of British Columbia in the Great Bear Rainforest, there lives a unique breed of wolf called sea wolves. They swim between islands like fish and are genetically distinct from their inland cousins, or from wolves in any other part of the world. They are smaller in size and 90 percent of their diet is seafood as these creatures live off an ocean.",
     "“The Hanging Garden Tree” on Meares Island close to Tofino is one of the oldest known western red cedars and is estimated to be between 1,500 and 2,000 years old.",
     "BC’s coastline is 25,725 km (15,985 mi) in total, just over 10% of Canada’s total coastline.",
     "Osoyoos Lake is the warmest fresh water lake in Canada.",
     "Approximately 20,000 square kilometers of British Columbia are covered by water.",
     "Since British Columbia is a coastal province, its lowest point is just the Pacific Ocean at 0 m elevation.",
     "The longest river in BC is the Fraser River. It is 1,399 km long.",
     "The Pacific salmon (Oncorhynchus) became the province’s official fish pretty recently, in 2013.",
     "The Salish Sea has a length of approximately 440 kilometers, a maximum depth of 650 meters, and covers a surface area of around 18,000 square kilometers. It is the deepest in BC.",
     "The Kermode bear (Ursus americanus kermodei) was made the official animal of British Columbia in 2006.",
     "British Columbia has a whopping 1,807 species of animals and plants at risk of extinction, more than any other province or territory in Canada. Some of the more well-known species include the basking shark, the Western toad, and the blue whale.",
     "Tweedsmuir Park is the largest provincial park in the province at 989,616 hectares. The smallest is Memory Island provincial park, at less than one hectare.",
     "British Columbia’s area is approximately 950,000 square kilometers, which is four times the size of Great Britain. This makes it the 4th large province/ territory in Canada.",
     };
    // Start is called before the first frame update
    void Start()
    {
        //points = 0;
        pointsText.text = "0";
        movement = m.GetComponent<Movement>();
    }

    // Update is called once per frame
    void Update()
    {
        points = movement.score;
       pointsText.text = points.ToString();
       showFact();
    }
    
    public void showFact(){
        
            pointsText.text += "\n" + fact[points-1];
    }
    public void save() {
        PlayerPrefs.SetInt("point", points);
    }
    
}

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 33.58475,
			lng: -101.87467,
		},
		zoom: 18,
		mapId: '97f9d00758256776',
        mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
    });

    const markers =[
        [
            "Texas Tech University",
            33.58475,
            -101.87467,
            "yoshi_house.svg",
            38, 
            31
        ],
        [
			"South Plains SPCA, $5000",
			 33.515658093575006,
             -101.8426453049633,
			"pointer.svg",
			30,
			47.8,
		],
		[
			"Covenant Children's Hospital, $10,000",
			33.573464789225035, 
            -101.9009589153522,
			"ghosthouse.svg",
			40,
			48,
		],
		[
            "Haven Animal Care Shelter, $2000", 
            33.64342104538698,
            -101.73254191660052,
            "castle.svg", 
            40, 
            53
        ],
		[
            "Grace Campus, $3000", 
            33.58348067101059,
             -101.83526118650767,
            "pipe.svg", 
            38, 
            42.5
        ],
		[
            "Buckner Family Hope Center, $2500", 
            33.59998584747708,
             -101.9296722630562,
            "star.svg", 
            38, 
            38
        ],
		[
			"Buckner Children and Family Services Lubbock, $2500",
			33.53304505484402,
             -101.85242464466212,
			"hill_with_eyes.svg",
			50,
			60.7,
		],
		[
			"South Plains Food Bank, $1000",
			33.543021374854746,
             -101.81768896448548,
			"hill_with_eyes.svg",
			50,
			60.7,
		],
		[
			"The Salvation Army of Lubbock, $1000",
			33.58073603894832,
             -101.84747915707946,
			"hill_with_eyes.svg",
			50,
			60.7,
		],
	];
    

    for(let i=0; i<markers.length; i++){
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: {
                lat: currMarker[1],
                lng: currMarker[2],
            },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
          });
          const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
    
          marker.addListener("click", () => {
            infowindow.open(map,marker);
            });
    }
    }
    
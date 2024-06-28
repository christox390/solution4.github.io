var names=new Array();
names[0]="Yuki";
names[1]="John";
names[2]="Jen";
names[3]="jenson";
names[4]="piastri";
names[5]="fernando";
names[6]="liam";
names[7]="paulina";
names[8]="lawson";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
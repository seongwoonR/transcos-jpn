
function play_tw(){

	/////// SET UP SCENE ////////
	queue(ClearScene, 0);
	Show("background","shop");
    Show("d-d","tw_shop_1");
    
	////////////////////////////

	Wait(1000);
    Show("customer","customer_bring_1");
    Wait(500);
	c("저기요,");
	c("이거 계산 좀 해주세요.");
	y("앗 네! 도와드리겠습니다!");

    Show("customer","customer_bring_2");
    Show("d-d","tw_shop_2");
    
	Wait(200);
	PlaySound("sfx","beep");
	Wait(200);
	PlaySound("sfx","beep");
	Wait(500);
	PlaySound("sfx","beep");
	c("...");
	Wait(300);
	PlaySound("sfx","beep");
	Wait(1000);
	y("네, 손님. 39800원 입니다.");
	Wait(1000);
	c("...");
	y("...?");
	y("저...");
	y("손님?");
	Wait(800);
	y("...손님?");
	c("아...! 미안해요.");
	c("근데, 저...");
	c("정말 궁금해서 그런데...");
	Wait(500);
	C("야, 그래도 묻는 건 좀 그렇지 않아?");
	c("그...");
	c("혹시 남자예요, 여자예요?");
	Wait(1000);
	y("...");

	Choose({
		"39800원입니다.": predict,
		"뭐일것 같아요?": predict,
		"굉장히 무례하시네요.": rude_customer
	});
}

function predict(message){
	y(message);
	c("남자죠?");
	C("여자 아니야?");
	c("아니야, 남자같아. 손봐봐");
	C("근데 남자라기엔 목소리가 좀...");
	y("저기...");
	shop_2();
}

function rude_customer(message){
	y(message);
	c("네?");
	y("제가 남자든 여자든 그게 중요한가요?");
	c("아니 좀... 궁금해서 물어볼 수도 있죠.");
	c("너무 말이 날카로우시네.");
	C("야, 야. 그냥 빨리 계산하고 가자.");
	shop_2();
}

	function shop_2(){
		//d was dad but I will use only one time here
		d("앗...손님, 이 분 남자예요!");
		Wait(800);
		c("거 봐, 내가 말했잖아.");
		c("남자라니까.");
        Show("d-d","tw_shop_1");
        Show("customer","customer_bring_1");
        Wait(500);
		C("그런가...");
		C("머리도 좀 길고 목소리도 좀 높은 것 같아서 여자인줄 알았는데.");
		C("남자라고 듣고보니 남자 같기도 하고...");
		c("내기라도 할 걸 그랬다.");
		y("...");
		y("...안녕히가세요.");
        Show("customer",null);
		Wait(500);
		y("하아...");

		Wait(1000);

		f("...");
        Show("friend","friend_shop");
		Wait(800);
		f("뭐야... 또 저런 진상 손님왔었네.");
		f("...유성. 괜찮아?")
		y("...");
		y("응.. 괜찮아.");
		y("미안한데 나 몸이 안좋아서 조퇴할테니 사장님께 말 좀 해줄래?");
		Wait(500);
		f("알았어... 들어가서 쉬어.");

		Clear();
		telephone();
	}

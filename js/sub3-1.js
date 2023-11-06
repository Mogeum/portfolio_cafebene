
let mapContainer = document.querySelector('#map'),
    mapOption = {
        center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
        level: 14 // 지도의 확대 레벨
    }
// 지도 생성 new kakao.maps.Map(지도표시할곳, mapOption)
let  standardMap = new kakao.maps.Map(mapContainer, mapOption);

//클러스터러 객체만들기 new kakao.maps.MarkerClusterer(옵션)
let clustererOption = {
  map :  standardMap, //클러스터 표시할 지도
  averageCenter: true, //클러스터에 포함된 marks의 평균 위도/경도 중심으로 클러스터의 중심위치 설정
  minLevel: 6 //클러스터링 할 최소지도 레벨
}
let cafeClusterer = new kakao.maps.MarkerClusterer(clustererOption);
// 각 store 정보를 객체로 정리
let cafebeneList = [
    {
        이름: `카페베네 백령도 2호점`,
        번호: '0507-1375-0341',
        위치: new kakao.maps.LatLng(37.95970456574301,124.664344952876125)
    },
    {
        이름: `카페베네 강릉안목점`,
        번호: '033-651-1100',
        위치: new kakao.maps.LatLng(37.7708457,128.9497099)
    },
    {
        이름: `카페베네 전라남도청`,
        번호: '061-281-0709',
        위치: new kakao.maps.LatLng(34.813034,126.458343)
    },
    {
        이름: `카페베네 강화외포리점`,
        번호: '032-932-6808',
        위치: new kakao.maps.LatLng(37.7053988,126.3673777)
    },
    {
        이름: `카페베네 포항역점`,
        번호: '',
        위치: new kakao.maps.LatLng(36.0716901,129.3421121)
    },
    {
        이름: `카페베네 포항경주공항점`,
        번호: '',
        위치: new kakao.maps.LatLng(35.9842072,129.4340374)
    },
    {
      이름: `카페베네 신경주역점`,
      번호: '0507-1491-1119',
      위치: new kakao.maps.LatLng(35.798365,129.138955)
    },
    {
      이름: `카페베네 신경주역점`,
      번호: '0507-1491-1119',
      위치: new kakao.maps.LatLng(35.798365,129.138955)
    },
    {
      이름: `카페베네 동대구역사점`,
      번호: '',
      위치: new kakao.maps.LatLng(35.879436199999695,128.6287756000003)
    },
    {
      이름: `카페베네 주문진점`,
      번호: '033-661-9878',
      위치: new kakao.maps.LatLng(37.9023372,128.8294025)
    },
    {
      이름: `카페베네 아크로힐스점(딜리버리전문 store)`,
      번호: '02-517-5579',
      위치: new kakao.maps.LatLng(37.5089617,127.038697)
    },
    {
      이름: `카페베네 계룡시청점`,
      번호: '042-551-6232',
      위치: new kakao.maps.LatLng(36.2736161,127.2532362)
    },
    {
      이름: `카페베네 을지로PJ호텔점`,
      번호: '02-2280-7083',
      위치: new kakao.maps.LatLng(37.5645985,126.9956415)
    },
    {
      이름: `카페베네 수원연화장점`,
      번호: '031-212-3363',
      위치: new kakao.maps.LatLng(37.2899589,127.0841751)
    },
    {
      이름: `카페베네 춘천소양동점`,
      번호: '033-242-4847',
      위치: new kakao.maps.LatLng(37.8826843,127.7230687)
    },
    {
      이름: `카페베네 논현역점`,
      번호: '02-546-5999',
      위치: new kakao.maps.LatLng(37.511501,127.0215155)
    },
    {
      이름: `카페베네 세종문화회관예술동점`,
      번호: '02-399-1560',
      위치: new kakao.maps.LatLng(37.572186,126.9768172)
    },
    {
      이름: `카페베네 수진역점`,
      번호: '031-759-7733',
      위치: new kakao.maps.LatLng(37.4374351,127.1419189)
    },
    {
      이름: `카페베네 소래포구점`,
      번호: '032-421-7666',
      위치: new kakao.maps.LatLng(37.4040785,126.7314894)
    },
    {
      이름: `카페베네 경북예천점`,
      번호: '0507-0289-3300',
      위치: new kakao.maps.LatLng(36.6510715,128.4552838)
    },
    {
      이름: `카페베네 대전태평점`,
      번호: '0507-1425-8102',
      위치: new kakao.maps.LatLng(36.3184017373126,127.39384914315269)
    },
    {
      이름: `카페베네 성수점`,
      번호: '02-461-6232',
      위치: new kakao.maps.LatLng(37.5458812,127.0479991)
    },
    {
      이름: `카페베네 75사단철마부대회관점`,
      번호: '070-4488-7140',
      위치: new kakao.maps.LatLng(37.7453144,127.2062438)
    },
    {
      이름: `카페베네 강동드림산부인과점`,
      번호: '',
      위치: new kakao.maps.LatLng(37.5498223,127.1760691)
    },
    {
      이름: `카페베네 거여역점`,
      번호: '02-449-6232',
      위치: new kakao.maps.LatLng(37.4931668,127.1459076)
    },
    {
      이름: `카페베네 거제수양점`,
      번호: '055-632-1717',
      위치: new kakao.maps.LatLng(34.8912834,128.6370321)
    },
    {
      이름: `카페베네 거제옥포점`,
      번호: '055-687-6232',
      위치: new kakao.maps.LatLng(34.8930301,128.6913236)
    },
    {
      이름: `카페베네 거제축협점`,
      번호: '0507-877-3401',
      위치: new kakao.maps.LatLng(34.8742026,128.6329972)
    },
    {
      이름: `카페베네 건대2호점`,
      번호: '02-462-6282',
      위치: new kakao.maps.LatLng(37.5414839,127.0667394)
    },
    {
      이름: `카페베네 거창점`,
      번호: '055-945-7080',
      위치: new kakao.maps.LatLng(35.6880269,127.9024132)
    },
    {
      이름: `카페베네 경북군위점`,
      번호: '054-383-3358',
      위치: new kakao.maps.LatLng(36.2305764,128.56845)
    },
    {
      이름: `카페베네 경주노동점`,
      번호: '054-745-1915',
      위치: new kakao.maps.LatLng(35.8416043,129.2132457)
    },
    {
      이름: `카페베네 경주주상절리전망대점`,
      번호: '054-743-3780',
      위치: new kakao.maps.LatLng(35.6859659,129.4735408)
    },
    {
      이름: `카페베네고창병원점`,
      번호: '',
      위치: new kakao.maps.LatLng(35.4364207,126.693663)
    },
    {
      이름: `카페베네 공주중동점`,
      번호: '041-857-6232',
      위치: new kakao.maps.LatLng(36.4546147,127.1247417)
    },
    {
      이름: `카페베네 광양이순신대교점`,
      번호: '061-795-4882',
      위치: new kakao.maps.LatLng(34.9270024,127.6996469)
    },
    {
      이름: `카페베네 구호전장례식장점`,
      번호: '062-518-6234',
      위치: new kakao.maps.LatLng(35.1670183,126.9167462)
    },
    {
      이름: `카페베네 광주만평장례식장점`,
      번호: '062-944-6232',
      위치: new kakao.maps.LatLng(35.1634804,126.81978579999999)
    },
    {
      이름: `카페베네 광주쌍촌점`,
      번호: '062-385-6232',
      위치: new kakao.maps.LatLng(35.1515134,126.8629179)
    },
    {
      이름: `카페베네 오일팔공원점`,
      번호: '062-381-6233',
      위치: new kakao.maps.LatLng(35.1584388,126.8595214)
    },
    {
      이름: `카페베네 광천유스퀘어점`,
      번호: '0507-1384-6232',
      위치: new kakao.maps.LatLng(35.1609417,126.8783876)
    },
    {
      이름: `카페베네 광주현대웰빙랜드점`,
      번호: '062-511-6232',
      위치: new kakao.maps.LatLng(35.1754253,126.8881687)
    },
    {
      이름: `카페베네 구리돌다리점`,
      번호: '031-564-6232',
      위치: new kakao.maps.LatLng(37.601128,127.142669)
    },
    {
      이름: `카페베네 군산산북점`,
      번호: '063-462-6232',
      위치: new kakao.maps.LatLng(35.96185777917018,126.67871339248896)
    },
    {
      이름: `카페베네 은파호수점`,
      번호: '070-8899-6232',
      위치: new kakao.maps.LatLng(35.9442591,126.7055088)
    },
    {
      이름: `카페베네 금촌로터리점`,
      번호: '031-949-0533',
      위치: new kakao.maps.LatLng(37.7575049,126.7717764)
    },
    {
      이름: `카페베네 김제검산점`,
      번호: '063-544-6232',
      위치: new kakao.maps.LatLng(35.8002423,126.9036338)
    },
    {
      이름: `카페베네 김포사우점`,
      번호: '031-998-6234',
      위치: new kakao.maps.LatLng(37.619632,126.7179191)
    },
    {
      이름: `카페베네 김해공항점`,
      번호: '051-941-8626',
      위치: new kakao.maps.LatLng(35.172707,128.9457484)
    },
    {
      이름: `카페베네 김해어방점`,
      번호: '055-325-9777',
      위치: new kakao.maps.LatLng(35.2367978,128.9028255)
    },
    {
      이름: `카페베네김해휴앤락점`,
      번호: '070-8882-5422',
      위치: new kakao.maps.LatLng(35.2421624,128.8685729)
    },
    {
      이름: `카페베네 남양주진접지구점`,
      번호: '031-575-6231',
      위치: new kakao.maps.LatLng(37.7113358,127.1878264)
    },
    {
      이름: `카페베네 남원춘향점`,
      번호: '063-635-6232',
      위치: new kakao.maps.LatLng(35.4018883,127.3891696)
    },
    {
      이름: `카페베네 대구아카데미점`,
      번호: '053-279-1259',
      위치: new kakao.maps.LatLng(35.8699871,128.5952145)
    },
    {
      이름: `카페베네장기점`,
      번호: '053-568-1120',
      위치: new kakao.maps.LatLng(35.8440871,128.53007)
    },
    {
      이름: `대전농협하나로마트점`,
      번호: '042-585-6232',
      위치: new kakao.maps.LatLng(36.2884748,127.3778829)
    },
    {
      이름: `카페베네 은행동점`,
      번호: '042-226-6232',
      위치: new kakao.maps.LatLng(36.3273044,127.4286547)
    },
    {
      이름: `카페베네 대천해수욕장점`,
      번호: '041-934-1700',
      위치: new kakao.maps.LatLng(36.31525799921895,126.51189866714884)
    },
    {
      이름: `카페베네 덕소역점`,
      번호: '0507-0289-5583',
      위치: new kakao.maps.LatLng(37.586955001198405,127.21137200033)
    },
    {
      이름: `카페베네 동강휴게소점`,
      번호: '033-648-8850',
      위치: new kakao.maps.LatLng(37.1773025,128.3552134)
    },
    {
      이름: `카페베네 동인천역점`,
      번호: '032-765-6232',
      위치: new kakao.maps.LatLng(37.4741919,126.6301207)
    },
    {
      이름: `카페베네 명일역점`,
      번호: '02-481-6232',
      위치: new kakao.maps.LatLng(37.5504336,127.1446818)
    },
    {
      이름: `카페베네 목포MBC점`,
      번호: '061-278-6234',
      위치: new kakao.maps.LatLng(34.806,126.40093)
    },
    {
      이름: `카페베네 문막휴게소점`,
      번호: ' ',
      위치: new kakao.maps.LatLng(37.334935599999994,127.8580095)
    },
    {
      이름: `카페베네 문정애이콤점`,
      번호: '02-407-0005',
      위치: new kakao.maps.LatLng(37.482485,127.1261034)
    },
    {
      이름: `카페베네 미아사거리역점`,
      번호: '02-987-3900',
      위치: new kakao.maps.LatLng(37.615101,127.0295557)
    },
    {
      이름: `카페베네 백령도점(1호점)`,
      번호: '032-836-6900',
      위치: new kakao.maps.LatLng(37.96863050189832,124.723912998266)
    },
    {
      이름: `카페베네 보령동대점`,
      번호: '041-934-6232',
      위치: new kakao.maps.LatLng(36.3455121,126.6080313)
    },
    {
      이름: `카페베네 기장점`,
      번호: '051-721-1021',
      위치: new kakao.maps.LatLng(35.2454373,129.2141462)
    },
    {
      이름: `카페베네 부산아트몰링점`,
      번호: '051-999-7559',
      위치: new kakao.maps.LatLng(35.10681729999901,128.96653200000205)
    },
    {
      이름: `카페베네 부산학장점`,
      번호: '051-324-7778',
      위치: new kakao.maps.LatLng(35.1375971,128.9770226)
    },
    {
      이름: `카페베네 부여휴게소(공주방향)점`,
      번호: '',
      위치: new kakao.maps.LatLng(36.2581714,126.8001552)
    },
    {
      이름: `카페베네 부여휴게소(서천방향)점`,
      번호: '',
      위치: new kakao.maps.LatLng(36.2584899,126.7968896)
    },
    {
      이름: `카페베네 부천남부역점`,
      번호: '032-656-6232',
      위치: new kakao.maps.LatLng(37.4826872,126.7848294)
    },
    {
      이름: `카페베네 부천송내역점`,
      번호: '032-655-5757',
      위치: new kakao.maps.LatLng(37.4857156,126.7528537)
    },
    {
      이름: `카페베네 부천역사점`,
      번호: '032-614-3222',
      위치: new kakao.maps.LatLng(37.4839075,126.7837853)
    },
    {
      이름: `카페베네 부천워터파크점`,
      번호: '032-328-6232',
      위치: new kakao.maps.LatLng(37.4993929,126.7448116)
    },
    {
      이름: `카페베네 사당역점`,
      번호: '02-521-5232',
      위치: new kakao.maps.LatLng(37.4761081,126.9806659)
    },
    {
      이름: `카페베네 산본역점`,
      번호: '031-399-8201',
      위치: new kakao.maps.LatLng(37.3592139,126.9323628)
    },
    {
      이름: `카페베네 삼양사거리점`,
      번호: '02-981-6232',
      위치: new kakao.maps.LatLng(37.3710834,126.9412759)
    },
    {
      이름: `카페베네 서산휴게소하행점`,
      번호: '',
      위치: new kakao.maps.LatLng(36.7430547,126.565315)
    },
    {
      이름: `카페베네 서산르셀점`,
      번호: '041-666-6232',
      위치: new kakao.maps.LatLng(36.7813994,126.470096)
    },
    {
      이름: `카페베네 서울고교사거리점`,
      번호: '070-7778-6630',
      위치: new kakao.maps.LatLng(37.4812984,127.0048553)
    },
    {
      이름: `카페베네 서울랜드점`,
      번호: '02-509-6450',
      위치: new kakao.maps.LatLng(37.4364611,127.024139)
    },
    {
      이름: `카페베네 선릉역점`,
      번호: '02-552-6232',
      위치: new kakao.maps.LatLng(37.5054766,127.0509291)
    },
    {
      이름: `카페베네 속초대포항점`,
      번호: '033-637-8880',
      위치: new kakao.maps.LatLng(38.1656852,128.5569925)
    },
    {
      이름: `카페베네 송탄출장소점`,
      번호: '0507-1396-2433',
      위치: new kakao.maps.LatLng(37.066508,127.062192)
    },
    {
      이름: `카페베네수원망포역점`,
      번호: '031-206-4333',
      위치: new kakao.maps.LatLng(37.2462558,127.0597093)
    },
    {
      이름: `카페베네 수원월드컵경기장점`,
      번호: '031-247-4680',
      위치: new kakao.maps.LatLng(37.289641,127.0348866)
    },
    {
      이름: `카페베네 아라마크 국립환경과학원점`,
      번호: '',
      위치: new kakao.maps.LatLng(37.59269999999997,126.61409999999991)
    },
    {
      이름: `카페베네 아라마크대림대점`,
      번호: '',
      위치: new kakao.maps.LatLng(37.40208728596919,126.929925362345)
    },
    {
      이름: `카페베네 연세의료원abmrc점`,
      번호: '',
      위치: new kakao.maps.LatLng(37.56388208452136,126.94257682191983)
    },
    {
      이름: `카페베네 연세의료원종합관점`,
      번호: ' ',
      위치: new kakao.maps.LatLng(37.561261,126.940011)
    },
    {
      이름: `카페베네 아라마크 포스코켐텍점`,
      번호: '',
      위치: new kakao.maps.LatLng(36.0018583,129.4158125)
    },
    {
      이름: `카페베네 안성점`,
      번호: '031-671-6232',
      위치: new kakao.maps.LatLng(37.007023700000005,127.27151099999999)
    },
    {
      이름: `카페베네 알펜시아점`,
      번호: '033-339-0631',
      위치: new kakao.maps.LatLng(37.65466527702772,128.6543721355696)
    },
    {
      이름: `카페베네 양산덕계평산점`,
      번호: '055-382-5599',
      위치: new kakao.maps.LatLng(35.3782155,129.1553418)
    },
    {
      이름: `카페베네 양주시청점`,
      번호: '031-8082-4090',
      위치: new kakao.maps.LatLng(37.785329,127.045847)
    },
    {
      이름: `카페베네연세원주장례사업소점`,
      번호: '070-4489-7140',
      위치: new kakao.maps.LatLng(37.3480183,127.9448265)
    },
    {
      이름: `카페베네 영대병원점`,
      번호: '053-626-0050',
      위치: new kakao.maps.LatLng(35.8468491,128.5852975)
    },
    {
      이름: `카페베네 영등포구청점`,
      번호: '02-2672-6232',
      위치: new kakao.maps.LatLng(37.5269078,126.8971119)
    },
    {
      이름: `카페베네 오산대점`,
      번호: '070-7699-7382',
      위치: new kakao.maps.LatLng(37.158828,127.0594639)
    },    
    {
      이름: `카페베네  운서역점`,
      번호: '032-746-2661',
      위치: new kakao.maps.LatLng(37.4947889,126.4922198)
    },
    {
      이름: `카페베네 울산성안점`,
      번호: '052-245-2005',
      위치: new kakao.maps.LatLng(35.5734528,129.3145454)
    },
    {
      이름: `카페베네 울산우정혁신도시점`,
      번호: '052-282-5959',
      위치: new kakao.maps.LatLng(35.5684446,129.3284697)
    },
    {
      이름: `카페베네 울진읍내리점`,
      번호: '054-782-6232',
      위치: new kakao.maps.LatLng(36.991325271540546,129.40101405807516)
    },
    {
      이름: `카페베네 원주세브란스기독병원점`,
      번호: '033-731-7898',
      위치: new kakao.maps.LatLng(37.3484021,127.9466412)
    },
    {
      이름: `카페베네 원주씨네마점`,
      번호: '033-765-6231',
      위치: new kakao.maps.LatLng(37.3307355,127.9500526)
    },
    {
      이름: `카페베네 이마트봉담점`,
      번호: '031-225-6230',
      위치: new kakao.maps.LatLng(37.2222271,126.9720631)
    },
    {
      이름: `카페베네 이마트트레이더스천안아산점`,
      번호: '041-541-5469',
      위치: new kakao.maps.LatLng(36.7965884,127.1058187)
    },
    {
      이름: `카페베네 부송점`,
      번호: '063-832-6232',
      위치: new kakao.maps.LatLng(35.9595169,126.9868738)
    },
    {
      이름: `카페베네 익산영등동점`,
      번호: '063-835-8777',
      위치: new kakao.maps.LatLng(35.9581475,126.9752581)
    },
    {
      이름: `카페베네 청학시대상가점`,
      번호: '032-851-6232',
      위치: new kakao.maps.LatLng(37.421443,126.6686974)
    },
    {
      이름: `카페베네 일산라페스타점`,
      번호: '031-905-6232',
      위치: new kakao.maps.LatLng(37.6596199,126.7695625)
    },
    {
      이름: `카페베네 일산웨스턴돔점`,
      번호: '031-907-5389',
      위치: new kakao.maps.LatLng(37.6571633,126.7716119)
    },
    {
      이름: `카페베네 킨텍스점`,
      번호: '031-995-8328',
      위치: new kakao.maps.LatLng(37.6689335,126.74580279999998)
    },
    {
      이름: `카페베네 일산탄현역점`,
      번호: '031-916-6232',
      위치: new kakao.maps.LatLng(37.691008,126.7624021)
    },
    {
      이름: `카페베네 일산호수공원점`,
      번호: '031-908-9808',
      위치: new kakao.maps.LatLng(37.6537453,126.7683562)
    },
    {
      이름: `카페베네 강진점`,
      번호: '061-434-6233',
      위치: new kakao.maps.LatLng(34.6406782,126.7706474)
    },
    {
      이름: `카페베네 영암점`,
      번호: '061)471-2226',
      위치: new kakao.maps.LatLng(34.7994761,126.6977792)
    },
    {
      이름: `카페베네 전주서신점`,
      번호: '063-277-3844',
      위치: new kakao.maps.LatLng(35.8308763,127.1162344)
    },
    {
      이름: `카페베네 제주롯데마트점`,
      번호: '064-798-2500',
      위치: new kakao.maps.LatLng(33.4824201,126.4819325)
    },
    {
      이름: `카페베네 제주아라점`,
      번호: '064-756-6232',
      위치: new kakao.maps.LatLng(33.4755288,126.5486085)
    },    
    {
      이름: `카페베네 제주중앙병원점`,
      번호: '064-711-0807',
      위치: new kakao.maps.LatLng(33.4920436,126.4713907)
    },
    {
      이름: `카페베네 진도점`,
      번호: '061-544-6232',
      위치: new kakao.maps.LatLng(34.4783437,126.264005)
    },    
    {
      이름: `카페베네 진주평거점`,
      번호: '055-745-6233',
      위치: new kakao.maps.LatLng(35.1724062,128.0675005)
    },    
    {
      이름: `카페베네 창녕남지점`,
      번호: '055-521-1230',
      위치: new kakao.maps.LatLng(35.3922909,128.4809157)
    },    
    {
      이름: `카페베네 창원대학점`,
      번호: '055-286-6232',
      위치: new kakao.maps.LatLng(35.2408457,128.6880928)
    },    
    {
      이름: `카페베네 천안병천점`,
      번호: '041-571-5278',
      위치: new kakao.maps.LatLng(36.7615869,127.298984)
    },
    {
      이름: `카페베네 천안신부점`,
      번호: '041-566-6232',
      위치: new kakao.maps.LatLng(36.8180657,127.1577344)
    },
    {
      이름: `카페베네 천안펜타포트점`,
      번호: '041-534-6232',
      위치: new kakao.maps.LatLng(36.7984279,127.1014298)
    },
    {
      이름: `카페베네 청량리역점`,
      번호: '02-960-6232',
      위치: new kakao.maps.LatLng(37.58167332589692,127.04745568903336)
    },
    {
      이름: `카페베네 청주봉명점`,
      번호: '043-263-6232',
      위치: new kakao.maps.LatLng(36.6510534,127.457332)
    },
    {
      이름: `카페베네청주용암점`,
      번호: '070-4154-2350',
      위치: new kakao.maps.LatLng(36.6080117,127.5026778)
    },
    {
      이름: `카페베네 춘천명동점`,
      번호: '033-242-6232',
      위치: new kakao.maps.LatLng(37.8787744,127.7271689)
    },
    {
      이름: `카페베네 충남도청점`,
      번호: '041-631-3265',
      위치: new kakao.maps.LatLng(36.6559494,126.6735441)
    },
    {
      이름: `카페베네 허브시티점`,
      번호: '043-742-8859',
      위치: new kakao.maps.LatLng(36.173328,127.78217)
    },
    {
      이름: `카페베네 태종대점`,
      번호: '051-633-9330',
      위치: new kakao.maps.LatLng(35.0696441,129.0796412)
    },
    {
      이름: `카페베네 퇴계원역사점`,
      번호: '',
      위치: new kakao.maps.LatLng(37.64823730091269,127.1444049)
    },
    {
      이름: `카페베네 청북점`,
      번호: '031-684-8899',
      위치: new kakao.maps.LatLng(37.0182902,126.91646600000001)
    },
    {
      이름: `카페베네 평택소사벌점`,
      번호: '0507-1302-2397',
      위치: new kakao.maps.LatLng(37.003755299999995,127.1045862)
    },
    {
      이름: `카페베네 포천일동점`,
      번호: '031-535-8200',
      위치: new kakao.maps.LatLng(37.957351,127.317792)
    },
    {
      이름: `카페베네 포항두호점`,
      번호: '054-251-0012',
      위치: new kakao.maps.LatLng(36.0670245,129.3722256)
    },
    {
      이름: `카페베네 포항송도점`,
      번호: '054-231-3232',
      위치: new kakao.maps.LatLng(36.0354625,129.379508)
    },
    {
      이름: `카페베네 한일병원점`,
      번호: '02-990-9500',
      위치: new kakao.maps.LatLng(37.6461401,127.02912279999998)
    },
    {
      이름: `카페베네 함평무안(하)휴게소점`,
      번호: '061-324-8858',
      위치: new kakao.maps.LatLng(35.06930009999975,126.47823399999986)
    },
    {
      이름: `카페베네 해운대청사포점`,
      번호: '051-704-7211',
      위치: new kakao.maps.LatLng(35.161014,129.1936175)
    },
    {
      이름: `카페베네 홍천점`,
      번호: '033-434-2374',
      위치: new kakao.maps.LatLng(37.6894691,127.8849027)
    },
]

let marks = []; //빈배열 선언

for (const store of cafebeneList) {
    // mark를 생성합니다
    let mark = new kakao.maps.Marker({    
        map:  standardMap,
        position: store.위치
    });

    // 인포윈도우에 표시할 내용
    let infoWindow = new kakao.maps.InfoWindow({
        content: `<div class="iw">${store.이름}<br>${store.번호}</div>`
    });

    marks.push(mark); //store정보를 이용해서 만든 mark를 marks배열에 추가

    // mark에 이벤트를 등록
    // mark에 마우스오버하면 makeOverListener() 실행
    kakao.maps.event.addListener(mark, 'mouseover', 마우스오버시실행( standardMap, mark, infoWindow));
    // mark에서 마우스아웃하면 makeOutListener() 실행
    kakao.maps.event.addListener(mark, 'mouseout', 마우스아웃시실행(infoWindow));
}

// 클로저: 함수의 리턴값이 익명함수인경우, 함수참조값을 익명함수가 땡겨쓰려할 때 사용한다.
// 이벤트 리스너로는 클로저를 만들어 등록, 클로저를 만들어 주지 않으면 마지막 mark에만 등록됨.

// infoWindow을 표시하는 클로저를 만드는 함수입니다 
function 마우스오버시실행( standardMap, mark, infoWindow) {
    return function () {
        infoWindow.open( standardMap, mark);
    };
}
// infoWindow을 닫는 클로저를 만드는 함수입니다 
function 마우스아웃시실행(infoWindow) {
    return function () {
        infoWindow.close();
    };
}

cafeClusterer.addMarkers(marks)

cafeClusterer.addMarkers(marks);
// 리사이징에 따라 반응형 잡기
window.addEventListener("resize", () => {
  // relayout();
  location.reload();
});
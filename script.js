function toggleDrawer() {
  const drawer = document.getElementById("room-drawer");
  const toggleButton = document.getElementById("drawer-toggle");

  drawer.classList.toggle("open");

  if (drawer.classList.contains("open")) {
    toggleButton.classList.add("drawer-hidden");
  } else {
    toggleButton.classList.remove("drawer-hidden");

    // Reset floor toggle
    const roomLists = document.querySelectorAll(".room-list.expanded");
    roomLists.forEach(list => {
      list.style.maxHeight = null;
      list.classList.remove("expanded");
    });
  }
}



function toggleFloorRooms(floor) {
  const section = document.getElementById(`floor-rooms-${floor}`);

  if (section.classList.contains("expanded")) {
    // ปิด
    section.style.maxHeight = null;
    section.classList.remove("expanded");
  } else {
    // ปิดอันอื่นก่อน (optional)
    document.querySelectorAll(".room-list.expanded").forEach(el => {
      el.style.maxHeight = null;
      el.classList.remove("expanded");
    });

    // เปิดที่เลือก
    section.classList.add("expanded");
    section.style.maxHeight = section.scrollHeight + "px";
  }
}



function switchFloor(floorNumber) {
  const floorMap = document.getElementById("floor-map");
  const floorLabel = document.getElementById("floor-label");

  // เปลี่ยนภาพแผนผัง
  floorMap.src = `p${floorNumber}.jpg`;

  // เปลี่ยนข้อความชื่อชั้น


  // ปรับปุ่มที่ active
  const buttons = document.querySelectorAll(".floor-buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));

  const activeBtn = Array.from(buttons).find(btn => btn.textContent === floorNumber.toString());
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

const roomImages = {
  'Room B6101-A': ['MapPic/Floor1/B6101-A.png'],
  'Room B6102-A': ['MapPic/Floor1/B6102-A.png'],
  'Room B6103-A': ['MapPic/Floor1/B6103-A.png'],
  'Room B6104-A': ['MapPic/Floor1/B6104-A.png'],
  'Room B6105-A': ['MapPic/Floor1/B6105-A.png'],
  'Room B6106-A': ['MapPic/Floor1/B6106-A.png'],
  'Room B6107-A': ['MapPic/Floor1/B6107-A.png'],
  'Room B6108-A': ['MapPic/Floor1/B6108-A.png'],
  'Room B6109-A': ['MapPic/Floor1/B6109-A.png'],
  'Room B6110-A': ['MapPic/Floor1/B6110-A.png'],
  'สำนักงานสำนักวิชาศาสตร์และศิลป์ดิจิทัล': ['MapPic/Floor1/H.png'],
  'ห้องงานนวัตกรรมและการบริการ': ['MapPic/Floor1/C.png'],
  'Learning Space': ['MapPic/Floor1/LS.png'],
  'ห้องพักอาจารย์': ['MapPic/Floor1/A.png'],
  'ห้องเจ้าหน้าที่สื่อโสต': ['MapPic/Floor1/D.png'],
  //ชั้น2
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 1': ['MapPic/Floor2/DL01.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 2': ['MapPic/Floor2/DL02.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 3': ['MapPic/Floor2/DL03.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 4': ['MapPic/Floor2/DL04.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 5': ['MapPic/Floor2/DL05.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 6': ['MapPic/Floor2/DL06.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 7': ['MapPic/Floor2/DL07.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 8': ['MapPic/Floor2/DL08.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 9': ['MapPic/Floor2/DL09.png'],
  'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 19': ['MapPic/Floor2/DL19.png'],
  'ห้องบริการการเทคโนโลยี 1': ['MapPic/Floor2/SE01.png'],
  'ห้องบริการการเทคโนโลยี 2': ['MapPic/Floor2/SE02.png'],
  'ห้องปฏิการเสียง': ['MapPic/Floor2/S.png'],
  'ห้องปฏิการลำดับภาพและเสียง': ['MapPic/Floor2/SP.png'],
  'สำนักงานศุยน์นวัตกรรมและเทคโนโลยีการศึกษา': ['MapPic/Floor2/I.png'],
  'สตูดิโอถ่ายภาพ': ['MapPic/Floor2/I01.png'],
  'ห้องประเมินประสิทธิภาพการสอน': ['MapPic/Floor2/I02.png'],
  'Creative Media & Innovation Space': ['MapPic/Floor2/C.png'],
  'สตูดิโอผลิตแอนิเมชั่นขั้นสูง': ['MapPic/Floor2/D01.png'],
  'ห้องปฏิการคอมพิวเตอร์กราฟฟิก': ['MapPic/Floor2/D02.png'],
  'ห้องปฏิการด้านสื่อปฏิสัมพันธ์': ['MapPic/Floor2/D03.png'],
  'ห้องพักอาจารย์2': ['MapPic/Floor2/A.png'],
//ชั้น3
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 10': ['MapPic/Floor3/DL10.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 11': ['MapPic/Floor3/DL11.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 12': ['MapPic/Floor3/DL12.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 13': ['MapPic/Floor3/DL13.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 14': ['MapPic/Floor3/DL14.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 15': ['MapPic/Floor3/DL15.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 16': ['MapPic/Floor3/DL16.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 17': ['MapPic/Floor3/DL17.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัล 18': ['MapPic/Floor3/DL18.png'],
'ห้องปฏิบัติการเทคโนโลยีดิจิทัลเชิงนวัตกรรมขั้นสูง': ['MapPic/Floor3/D1.png'],
'ห้องปฏิบัติการธุรกิจอัจฉริยะและการวิเคราะห์ข้อมูล': ['MapPic/Floor3/D2.png'],
'ห้องปฏิบัติการไซเบอร์สเปซและความมั่งคงปรอดภัยไซเบอร์': ['MapPic/Floor3/D3.png'],
'ห้องปฏิบัติการด้านการผลิตรายการดิจิทัล': ['MapPic/Floor3/DS(เนื้อ).png'],
'ห้องปฏิบัติการด้านการผลิตรายการดิจิทัลขนาดเล็ก': ['MapPic/Floor3/DS(ชมพู).png'],
'ห้องปฏิบัติการเทคโนโลยีเสมือนจริง': ['MapPic/Floor3/VL.png'],
'ห้องปฏิบัติการเทคโนโลยีสื่อดิจิทัล': ['MapPic/Floor3/R.png'],
'ห้องควบคุมทางเทคนิค': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการบริหารการคลังสื่อดิจิทัล 1': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการบริหารการคลังสื่อดิจิทัล 2': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการบริหารการคลังสื่อดิจิทัล 3': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการบริหารการคลังสื่อดิจิทัล 4': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการบริหารการคลังสื่อดิจิทัล 5': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการบริหารการคลังสื่อดิจิทัล 6': ['MapPic/Floor3/K,PS,S.png'],
'ห้องคัดเลือกสื่อดิจิทัล': ['MapPic/Floor3/K,PS,S.png'],
'ห้องปฏิบัติการตรวจสอบคุณภาพสื่อ': ['MapPic/Floor3/N.png'],
'ห้องสตูดิโอบันทึกเสียง 1': ['MapPic/Floor3/T.png'],
'ห้องสตูดิโอบันทึกเสียง 2': ['MapPic/Floor3/T.png'],
'ห้องสตูดิโอบันทึกเสียง 3': ['MapPic/Floor3/T.png'],
'ห้องสตูดิโอบันทึกเสียง 4': ['MapPic/Floor3/T.png'],
'ห้องปฏิบัติการด้านเสียงขั้นสูง': ['MapPic/Floor3/V.png'],
'ห้องผลิตสื่อการสอนด้วยตนเอง 1-4': ['MapPic/Floor3/G1-4.png'],


//ชั้น4
'สำนักงานศูนย์คอมพิวเตอร์': ['MapPic/Floor4/CCS.png'],
'ห้องประชุมสิริคุณากร': ['MapPic/Floor4/M1.png'],
'ห้องประชุมสีมาดิจิทัล': ['MapPic/Floor4/M2.png'],
'ห้องประชุมคุณากรรัตน': ['MapPic/Floor4/M3.png'],
'ห้อง Studio Control Room 1': ['MapPic/Floor4/ST1.png'],
'ห้อง Digital Studio 2': ['MapPic/Floor4/ST2.png'],
'ห้อง Digital Studio 3': ['MapPic/Floor4/ST3.png'],
'ห้องประชุมทางไกล': ['MapPic/Floor4/O.png'],
'สำนักงานศูนย์นวัตกรรมและเทคโนโลยีการศึกษา4': ['MapPic/Floor4/I.png'],

//ชั้น5
'B6501-A': ['MapPic/Floor5/B6501-A.png'],
'B6502-A': ['MapPic/Floor5/B6502-A.png'],
'B6503-A': ['MapPic/Floor5/B6503-A.png'],
'สถานส่งเสริมและพัฒนาระบบสารสนเทศเพื่อการจัดการ': ['MapPic/Floor5/MIS.png'],
'Learning Space5': ['MapPic/Floor5/Learning Space5.png'],
  // เพิ่มรูปสำหรับทุกห้องตามต้องการ 
};

let currentImageIndex = 0;
let currentRoom = '';

function openRoomPopup(roomName) {
  currentRoom = roomName;
  currentImageIndex = 0;

  document.getElementById('popup-room-name').textContent = roomName;
  updateRoomImage();
  document.getElementById('room-popup').classList.remove('hidden');

  toggleDrawer();
}

function closeRoomPopup() {
  document.getElementById('room-popup').classList.add('hidden');
}

function updateRoomImage() {
  const img = document.getElementById('popup-room-image');
  const images = roomImages[currentRoom];
  img.src = images[currentImageIndex];
}

function prevImage() {
  const images = roomImages[currentRoom];
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateRoomImage();
}

function nextImage() {
  const images = roomImages[currentRoom];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateRoomImage();
}




// ตั้งค่าเริ่มต้นให้ปุ่ม Floor 1 เป็น active
window.onload = () => {
  switchFloor(1);
};

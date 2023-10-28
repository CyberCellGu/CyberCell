
import React, { useState } from 'react';
import './Members.css';

const teamMembers = [
  
  // { name: 'Shekhar Patel', photo: '/photos/SP.png' },
  // { name: 'Suvidh Kant', photo: '/photos/pic1.png' },
  // { name: 'Suman Sourav', photo: '/photos/SS.JPG' },
  // { name: 'Vivek Singh', photo: '/photos/IMG_20230822_100155 - Vivek Singh.jpg' },
  // { name: 'Mohit Gupta', photo: '/photos/20221024_220540~3 - Mohit Gupta.jpg' },
  // { name: 'Ayushi Shukla', photo: '/photos/IMG-20230209-WA0021(1).jpg' },
  // { name: 'Shaurya Verma', photo: '/photos/IMG_20230829_172203 - Shaurya Verma.jpg' },
  // { name: 'Priyanshu Bhardwaj', photo: '/photos/priyanshu___pandit___-20221128-0006 - Priyanshu Bhardwaj.jpg' },
  // { name: 'Alay Sharma', photo: '/photos/AS.jpg' },
  // { name: 'Aviral Singh', photo: '/photos/IMG_20230524_154933_824 - Aviral Singh.jpg' },
  // { name: 'Siddh Mishra', photo: '/photos/IMG_20230810_204835_119 - Sid Mishra.jpg' },
  // { name: 'Shreyansh Pandey', photo: '/photos/WhatsApp Image 2023-08-28 at 8.09.25 PM.jpeg' },
  // { name: 'Muhammad Sami Bhat', photo: '/photos/WhatsApp Image 2023-09-12 at 6.21.02 PM.jpeg' },
  // { name: 'Vidhi Patel', photo: '/photos/IMG-20230421-WA0017 - Vidhi Patel.jpg' },
  // { name: 'Heeral Sahu', photo: '/photos/1683800720531 - Heeral Sahu.jpg' },
  // { name: 'Yuvraj Tomar', photo: '/photos/yuv - YUVRAJ TOMAR 21SCSE1011128.jpg' },
  // { name: 'Anshika Dwivedi', photo: '/photos/Snapchat-582114608 - anshika dwivedi.jpg' },
  // { name: 'Shashank Saxena', photo: '/photos/IMG_20230829_180159 - shashank swaroop.jpg' },
  // { name: 'Vidushi Patel', photo: '/photos/IMG_20230615_204225 - Vidushi Patel.jpg' },
  // { name: 'Utkarsh Raj', photo: '/photos/20221127_173318_0000 - Utkarsh Raj.png' },
  // { name: 'Prabhat Kumar', photo: '/photos/1.jpg'},
  // { name: 'Hadi Arkam', photo: '/photos/ARK_1 (1) - hadi arkam.jpg' },
  // { name: 'Ashwin Gupta', photo: '/photos/IMG_7520 - Ashwin Gupta.jpeg' },
  // { name: 'Sameer Jawed', photo: '/photos/profile - Sameer Jawed.jpg' },
  // { name: 'Sugam Agrawal', photo: '/photos/Screenshot 2023-09-14 at 6.58.46 PM.png' },
  // { name: 'Shanu Kumar', photo: '/photos/IMG20221223191733 - Shanu Kumar.jpg' },
  // { name: 'Arya Ranjan', photo: '/photos/IMG_20190810_213635 - Arya Ranjan.jpg' },
  // { name: 'Anuj Singh Chauhan', photo: '/photos/20220612_102152 - Anuj Singh Chauhan.jpg' }
];

function Members() {
  return (
    <div>

      <div className="members">
        <div className="title">
          <h1>HACKTIVISTS</h1>
        </div>
        <div className="team-container">

          <div className="container1">
            <h1 className='heading'>A community of cybersavvy superheroes </h1>
            <div className="image">
              <img src="./ContentPhoto.png" alt="" />
            </div>
          
        </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="member-name">
                {member.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;

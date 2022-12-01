import React from 'react';
import './Header.scss';
import gif from '../images/gif.gif';
import notifications from '../images/notification.svg';
import flake from '../images/flake.svg';
import gift from '../images/gift.svg';
import calendar from '../images/calendar.svg';
import paw from '../images/paw.svg';
import backpack from '../images/backpack.svg';
import members from '../images/members.svg';
import diary from '../images/diary.svg';
import bookmark from '../images/bookmark.svg';
import settings from '../images/settings.svg';
import message from '../images/message.svg';

const Header = () => {
  const [time, setTime] = React.useState();
  setInterval(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div className='header'>
      <div className='header_profile'>
        <img src={gif} alt='profile' className='header_profile_img' />
        <div className='header_profile_img_popUp'></div>
        <div className='header_profile_buttons'>
          <img className='header_profile_buttons_button' alt='notifications' src={notifications} />
          <img className='header_profile_buttons_button' alt='calendar' src={calendar} />
          <img className='header_profile_buttons_button' alt='gifts' src={gift} />
          <img className='header_profile_buttons_button' alt='holiday' src={flake} />
        </div>
      </div>
      <div className='header_links'>
        <img className='header_links_link' alt='My pets' src={paw} />
        <img className='header_links_link' alt='My backpack' src={backpack} />
        <img className='header_links_link' alt='Trainers' src={members} />
        <img className='header_links_link' alt='Diary' src={diary} />
        <img className='header_links_link' alt='Clans' src={bookmark} />
        <img className='header_links_link' alt='Workbench' src={settings} />
        <img className='header_links_link' alt='Messages' src={message} />
      </div>
      <div className='header_time'>
        <p>{time}</p>
      </div>
    </div>
  );
};
export default Header;

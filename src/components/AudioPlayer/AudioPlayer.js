import React, { useState, useRef, useEffect } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import Icon from './../Icon/Icon';

import {
  audio_player_wrapper,
  audio_player,
  audio_player_controls,
  audio_player_text,
  play_btn,
  pause_btn,
  arrow_menu,
  socials_menu,
  socials_menu_m,
  socials_icon,
  process_bar_wrapper,
  process_bar,
} from './AudioPlayer.module.scss';

const AudioPlayer = ({ url }) => {
  const [src, setSrc] = useState('');
  const [openSocialsTab, setOpenSocialsTab] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const pageUrl = usePathname();

  useEffect(() => {
    if (url) {
      setSrc(url);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = scrollHeight - clientHeight;
      const newProgress = (scrollTop / windowHeight) * 100;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (duration === parseFloat(currentTime)) {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    }
  }, [currentTime]);

  return (
    <>
      <div className={audio_player_wrapper}>
        <div className={audio_player}>
          <div className={audio_player_text}>
            Et felis eu egestas facilisis interdum praesent.
          </div>
          <div className={audio_player_controls}>
            <audio
              ref={audioRef}
              src={src}
              onTimeUpdate={handleTimeUpdate}
              onLoadedData={handleLoadedData}
            >
              <track
                kind="captions"
                src="path/to/captions.vtt"
                srcLang="en"
                label="English Captions"
              />
            </audio>
            <span>Listen </span>
            <button
              className={isPlaying ? pause_btn : play_btn}
              onClick={togglePlay}
            ></button>
            <div>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
              />
              <div>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpenSocialsTab(!openSocialsTab)}
            className={arrow_menu}
          >
            {!openSocialsTab && <Icon type="arrow" name="default-down" />}
            {openSocialsTab && <Icon type="arrow" name="default-up" />}
          </button>
          <div className={socials_menu}>
            <span>Share this</span>
            <div>
              <LinkedinShareButton url={pageUrl}>
                <Icon type="social" name="linkedin" className={socials_icon} />
              </LinkedinShareButton>
              <TwitterShareButton url={pageUrl}>
                <Icon type="social" name="twitter" className={socials_icon} />
              </TwitterShareButton>
              <FacebookShareButton url={pageUrl}>
                <Icon type="social" name="facebook" className={socials_icon} />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        {openSocialsTab && (
          <ul className={socials_menu_m}>
            <li>
              <LinkedinShareButton url={pageUrl}>
                <Icon type="social" name="linkedin" className={socials_icon} />
              </LinkedinShareButton>
            </li>
            <li>
              <TwitterShareButton url={pageUrl}>
                <Icon type="social" name="twitter" className={socials_icon} />
              </TwitterShareButton>
            </li>
            <li>
              <FacebookShareButton url={pageUrl}>
                <Icon type="social" name="facebook" className={socials_icon} />
              </FacebookShareButton>
            </li>
          </ul>
        )}
        <div className={process_bar_wrapper}>
          <div style={{ width: `${progress}%` }} className={process_bar}></div>
        </div>
      </div>
    </>
  );
};

AudioPlayer.propTypes = {
  url: PropTypes.string,
};

export default AudioPlayer;

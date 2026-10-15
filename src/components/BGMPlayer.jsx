import React, { useState, useEffect, useRef, useCallback } from 'react';

const PLAYLIST = [
  { id: 'CELqNBjpdms', title: 'Color Your Night',   source: 'Persona 3 Reload OST' },
  { id: 'Osk6gX6R_bA', title: 'Beneath the Mask',   source: 'Persona 5 OST \u2014 Rain Ver.' },
  { id: 'CVLH5V6YvOI', title: 'Heaven',              source: 'Persona 4 OST' },
  { id: 'xxpg9_2on3I', title: '3:03 PM',             source: 'Sharou' },
];

export function BGMPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(40);
  const [isReady, setIsReady] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const playerRef = useRef(null);
  const currentTrack = PLAYLIST[trackIdx];

  const loadTrack = useCallback((idx, shouldPlay) => {
    if (!playerRef.current || !isReady) return;
    const track = PLAYLIST[idx];
    playerRef.current.loadVideoById(track.id);
    if (!shouldPlay) playerRef.current.pauseVideo();
  }, [isReady]);

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player('bgm-youtube-player', {
        height: '0',
        width: '0',
        videoId: PLAYLIST[0].id,
        playerVars: { autoplay: 0, controls: 0, rel: 0, modestbranding: 1 },
        events: {
          onReady: (event) => { event.target.setVolume(40); setIsReady(true); },
          onStateChange: (event) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            // Auto advance to next track when one ends
            if (event.data === window.YT.PlayerState.ENDED) {
              setTrackIdx(prev => {
                const next = (prev + 1) % PLAYLIST.length;
                setTimeout(() => {
                  if (playerRef.current) {
                    playerRef.current.loadVideoById(PLAYLIST[next].id);
                  }
                }, 100);
                return next;
              });
            }
          },
        },
      });
    };
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = initPlayer;
    }
    return () => { if (playerRef.current && playerRef.current.destroy) playerRef.current.destroy(); };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    if (isPlaying) { playerRef.current.pauseVideo(); } else { playerRef.current.playVideo(); }
  };

  const switchTrack = (idx) => {
    setTrackIdx(idx);
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      // loadVideoById = load + autoplay
      playerRef.current.loadVideoById(PLAYLIST[idx].id);
    } else {
      // cueVideoById = load only, no autoplay (avoids race condition)
      playerRef.current.cueVideoById(PLAYLIST[idx].id);
    }
  };

  const prevTrack = () => switchTrack((trackIdx - 1 + PLAYLIST.length) % PLAYLIST.length);
  const nextTrack = () => switchTrack((trackIdx + 1) % PLAYLIST.length);

  const handleVolume = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (playerRef.current && isReady) playerRef.current.setVolume(val);
  };

  const btnBase = { border: 'none', background: 'transparent', color: 'rgba(200,180,255,0.7)', fontSize: '13px', cursor: 'pointer', padding: '4px 6px', borderRadius: '6px', transition: 'all 0.2s', lineHeight: 1 };

  return (
    <>
      <div id="bgm-youtube-player" style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden', bottom: 0, right: 0 }} />
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
        {/* Expanded Panel */}
        <div style={{ background: 'rgba(8,8,20,0.90)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: '20px', padding: '18px 20px', width: '272px', boxShadow: '0 8px 40px rgba(0,0,0,0.55),inset 0 1px 0 rgba(255,255,255,0.06)', transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)', transform: isExpanded ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)', opacity: isExpanded ? 1 : 0, pointerEvents: isExpanded ? 'all' : 'none' }}>
          {/* Track Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'conic-gradient(from 0deg,#0d0d1a 0%,#1a1040 25%,#2d1b69 50%,#1a1040 75%,#0d0d1a 100%)', boxShadow: isPlaying ? '0 0 18px rgba(124,58,237,0.7)' : '0 2px 10px rgba(0,0,0,0.5)', animation: isPlaying ? 'bgm-spin 4s linear infinite' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'box-shadow 0.4s' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,0.95) 40%,rgba(200,180,255,0.6) 100%)' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#ffffff', fontFamily: '"Inter",sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: '-0.01em' }}>{currentTrack.title}</div>
              <div style={{ fontSize: '10.5px', color: 'rgba(167,139,250,0.85)', fontFamily: '"Inter",sans-serif', marginTop: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{currentTrack.source}</div>
              {/* Playlist dots */}
              <div style={{ display: 'flex', gap: '5px', marginTop: '6px' }}>
                {PLAYLIST.map((_, i) => (
                  <div key={i} onClick={() => switchTrack(i)} style={{ width: i === trackIdx ? '16px' : '6px', height: '6px', borderRadius: '3px', background: i === trackIdx ? '#7c3aed' : 'rgba(124,58,237,0.3)', transition: 'all 0.3s', cursor: 'pointer' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Equalizer */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '26px', marginBottom: '14px', padding: '0 2px' }}>
            {[0.5,0.8,0.6,1,0.7,0.9,0.55,0.75,1,0.65,0.85,0.6].map((h,i) => (
              <div key={i} style={{ flex: 1, borderRadius: '2px', background: 'linear-gradient(to top,#7c3aed,#c4b5fd)', height: isPlaying ? h*100+'%' : '20%', opacity: isPlaying ? 0.9 : 0.25, animation: isPlaying ? 'bgm-eq '+(0.35+i*0.08)+'s ease-in-out infinite alternate' : 'none', transition: 'opacity 0.5s', transformOrigin: 'bottom' }} />
            ))}
          </div>

          {/* Controls Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Prev */}
            <button id="bgm-prev-btn" onClick={prevTrack} title="Previous" style={btnBase} onMouseEnter={e=>{e.currentTarget.style.color='#fff'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(200,180,255,0.7)'}}>⏮</button>
            {/* Play/Pause */}
            <button id="bgm-play-pause-btn" onClick={togglePlay} disabled={!isReady} onMouseEnter={e=>{if(isReady)e.currentTarget.style.transform='scale(1.12)'}} onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)'}} style={{ width: '38px', height: '38px', borderRadius: '50%', border: 'none', background: isReady ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '14px', cursor: isReady ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isReady ? '0 4px 14px rgba(124,58,237,0.45)' : 'none', transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)', flexShrink: 0 }}>
              {!isReady ? '⏳' : isPlaying ? '⏸' : '▶'}
            </button>
            {/* Next */}
            <button id="bgm-next-btn" onClick={nextTrack} title="Next" style={btnBase} onMouseEnter={e=>{e.currentTarget.style.color='#fff'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(200,180,255,0.7)'}}>⏭</button>
            {/* Volume */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px', userSelect: 'none' }}>{volume===0?'🔇':volume<50?'🔉':'🔊'}</span>
              <input id="bgm-volume-slider" type="range" min="0" max="100" value={volume} onChange={handleVolume} style={{ flex: 1, height: '3px', accentColor: '#7c3aed', cursor: 'pointer' }} />
            </div>
          </div>
        </div>

        {/* FAB Toggle Button */}
        <button id="bgm-toggle-btn" onClick={()=>setIsExpanded(p=>!p)} title="BGM Player" onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.1)'}} onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)'}} style={{ width: '54px', height: '54px', borderRadius: '50%', border: '1px solid rgba(124,58,237,0.3)', background: isPlaying ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(10,10,24,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', color: '#fff', fontSize: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isPlaying ? '0 0 24px rgba(124,58,237,0.6),0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.35)', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)', animation: isPlaying ? 'bgm-pulse 2.5s ease-in-out infinite' : 'none' }}>🎵</button>
      </div>
      <style>{`
        @keyframes bgm-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bgm-eq { from { transform: scaleY(0.2); } to { transform: scaleY(1); } }
        @keyframes bgm-pulse { 0%,100% { box-shadow: 0 0 24px rgba(124,58,237,0.6),0 4px 20px rgba(0,0,0,0.5); } 50% { box-shadow: 0 0 40px rgba(124,58,237,0.9),0 4px 28px rgba(0,0,0,0.6); } }
      `}</style>
    </>
  );
}

export default BGMPlayer;

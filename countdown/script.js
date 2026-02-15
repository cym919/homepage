let confettiTriggered = false;

function updateCountdown() {
    const targetDate = new Date('2026-02-17T00:00:00');
    const now = new Date();
    const diff = targetDate - now;

    // 检查是否到达或超过目标时间
    if (diff <= 0 && !confettiTriggered) {
        triggerConfetti();
        confettiTriggered = true;
    }

    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

    // 确保每个数字都是两位数
    const formattedDays = days.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('countdown1').innerHTML = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function triggerConfetti() {
    try {
        // 使用tsparticles-confetti库触发五彩纸屑效果
        confetti({
            particleCount: 1000,
            angle: 90,
            spread: 360,
            origin: { x: 0.5, y: 0.5 },
            startVelocity: 40,
            gravity: 1,
            drift: 1,
            ticks: 200,
            colors: [
                '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
                '#ffeaa7', '#dfe6e9', '#e17055', '#00b894',
                '#6c5ce7', '#a29bfe', '#fd79a8', '#e84393'
            ]
        });
    } catch (error) {
        console.error('执行纸屑动画失败:', error.message);
    }
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeIcon = document.getElementById('mode-icon');
    modeIcon.src = document.body.classList.contains('dark-mode') ? 'sun-icon.svg' : 'moon-icon.svg';
}

function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const startYear = 2025;
    const copyrightYear = currentYear === startYear ? currentYear : `${startYear}-${currentYear}`;
    document.getElementById('current-year').textContent = copyrightYear;
}

// 每秒更新倒计时
setInterval(updateCountdown, 1000);

// 初始化版权声明中的年份
updateCopyrightYear();

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeIcon = document.getElementById('mode-icon');
    modeIcon.src = document.body.classList.contains('dark-mode') ? 'sun-icon.svg' : 'moon-icon.svg';
}
// Auto transition from Welcome Screen to Navigation Screen
setTimeout(() => {
    document.getElementById('welcomeScreen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('navigationScreen').style.display = 'block';
        document.getElementById('navigationScreen').classList.remove('hidden');
    }, 1000);
}, 3000);

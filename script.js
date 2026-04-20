document.addEventListener('DOMContentLoaded', () => {
    // 画面に要素が入ってきたかを検知するためのObserver設定
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 要素が15%見えたらアニメーションを発火
    };

    // IntersectionObserverのインスタンス作成
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素が画面に入ったら 'visible' クラスを付与
                entry.target.classList.add('visible');
                // 一度発火したら監視を解除する（一回だけのアニメーション）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // アニメーションを付与するすべての対象セクションを取得して監視対象に追加
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

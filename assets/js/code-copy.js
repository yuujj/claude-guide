/**
 * Code Copy
 * 코드 블록 복사 버튼
 */

export function initCodeCopy() {
  document.querySelectorAll('.code-block__copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const block = btn.closest('.code-block');
      const code = block?.querySelector('code');
      if (!code) return;

      const text = code.textContent;
      try {
        await navigator.clipboard.writeText(text);
        showCopied(btn);
      } catch (e) {
        // 폴백: 텍스트 선택
        const range = document.createRange();
        range.selectNode(code);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        try {
          document.execCommand('copy');
          showCopied(btn);
        } catch (err) {
          btn.textContent = '실패';
        }
        selection?.removeAllRanges();
      }
    });
  });
}

function showCopied(btn) {
  const original = btn.textContent;
  btn.textContent = '복사됨!';
  setTimeout(() => {
    btn.textContent = original;
  }, 1500);
}

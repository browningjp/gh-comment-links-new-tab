function modifyLinks() {
    const links = document.querySelectorAll('.comment-body a');
  
    links.forEach(link => {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
}
  
const targetNode = document.querySelector('.discussion-timeline');
  
const config = { childList: true, subtree: true };
  
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        modifyLinks();
      }
    }
};
  
const observer = new MutationObserver(callback);
  
if (targetNode) {
    observer.observe(targetNode, config);
} else {
    console.warn('GitHub comments container not found');
}
  
modifyLinks();
  
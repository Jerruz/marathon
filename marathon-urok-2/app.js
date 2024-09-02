const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    // console.log('drag start', event.target.classList);
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0)
    }

function dragend(event) {
    // console.log('drag end');
    event.target.className = 'item'
}

function dragover(event) {
    console.log('dragover');

}
function dragenter(event) {
    console.log('dragenter');
    event.target.classList.add('hovered')

}
function dragleave(event) {
    console.log('dragleave');

}
function dragdrop(event) {
    console.log('dragdrop');

}
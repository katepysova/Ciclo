class FullPageObserver {
  constructor(
    element,
    threshold,
    onInterectionStart,
    onInterectionFinish,
    root = null,
    behavior = "smooth"
  ) {
    this.element = element;
    this.root = root;
    this.threshold = threshold;
    this.behavior = behavior;
    this.onInterectionStart = onInterectionStart;
    this.onInterectionFinish = onInterectionFinish;

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        root: this.root,
        threshold: this.threshold,
      }
    );
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        if (this.onInterectionStart) this.onInterectionStart(target);
        const activeSection = target;
        activeSection.scrollIntoView({ behavior: this.behavior });
      } else if (this.onInterectionFinish) this.onInterectionFinish(target);
    });
  }

  observe() {
    this.observer.observe(this.element);
  }
}

export default FullPageObserver;

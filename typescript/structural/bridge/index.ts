interface MediaPlayerImplementation {
    playAudio(): void;
    playVideo(): void;
}

class WindowsmediaPlayer implements MediaPlayerImplementation {
    public playAudio() {
        console.log("Playing audio on windows media player!")
    }

    public playVideo() {
        console.log("Playing video on windows media player!")
    }
}

class MacosmediaPlayer implements MediaPlayerImplementation {
    public playAudio() {
        console.log("Playing audio on macos media player!")
    }

    public playVideo() {
        console.log("Playing video on macos media player!")
    }
}

abstract class MediaPlayerAbstarction {
    constructor(
        protected implementation: MediaPlayerImplementation
    ) {}

    abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstarction {
    public playFile(): void {
        this.implementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstarction {
    public playFile(): void {
        this.implementation.playVideo();
    }
}
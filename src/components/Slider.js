import { slides } from "../data/sliderData"
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Slider({ open, close }) {
   

  return (
        <div>
            <Lightbox
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                        thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                        thumbnail: {padding: 0},
                    }}
                open={open}
                close={() => close()}
                slides={slides}
                plugins={[Thumbnails]}
            />

        </div>
  )
}

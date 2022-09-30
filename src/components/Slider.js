import { slides } from "../data/sliderData"
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Slider({ open, close }) {
   

  return (
        <div>
            <Lightbox
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)", padding: '10%' },
                        thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                        thumbnail: {padding: 0, border: 3, height: '75px', width: '75px'},
                        // button: {color: 'black', backgroundColor: 'white', borderRadius: '99px', padding: '5px', margin: '250px'},
                    }}
                open={open}
                close={() => close()}
                slides={slides}
                plugins={[Thumbnails]}
            />

        </div>
  )
}

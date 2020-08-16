import React, { useState } from 'react';
import { Measure, getMeasure } from '../data/measures';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewMeasure.css';

interface ViewMeasureProps extends RouteComponentProps<{ id: string; }> { }

const ViewMeasure: React.FC<ViewMeasureProps> = ({ match }) => {

  const [measure, setMeasure] = useState<Measure>();

  useIonViewWillEnter(() => {
    const msg = getMeasure(parseInt(match.params.id, 10));
    setMeasure(msg);
  });

  return (
    <IonPage id="view-measure-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {measure ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {measure.fromName}
                  <span className="date">
                    <IonNote>{measure.date}</IonNote>
                  </span>
                </h2>
                <h3>To: <IonNote>Me</IonNote></h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{measure.subject}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ) : <div>Measure not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewMeasure;

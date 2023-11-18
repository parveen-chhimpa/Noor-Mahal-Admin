import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Alert, Linking, TextInput, Button, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import Styles from './ReservationStyle'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingAction } from '../../Action/BookingAction'
import { useNavigation } from '@react-navigation/native';
export default function Reservation(props) {
  const [Data, setData] = useState([])
  console.log(Data, '///////////')
  const token = useSelector(state => state.LoginReducer.Login[0].token)
  const dispatch = useDispatch();
  useEffect(() => {
    BookingList(token);
  }, [])
  const BookingList = (token) => {
    dispatch(BookingAction.ListOfBookingAction(token)).then(async data => {
      //  console.log(data,'ppppppppppp')
      if (data) {
        setData(data);
        //  setloader(false);
      }

    })
  }
  const Cancel = () => {
    if (true) {
      Alert.alert('Reservation', 'Reservation cancelled successfully. Notification sent to customer.', [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Presed')
        }
      ])
    }
    else {
      Alert.alert('Reservation', 'Reservation cancellation failed. Please contact to customer manually and inform this error to owner', [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Presed')
        }
      ])
    }
  }


  const data = [
    {
      id: 1,
      code: '#592567',
      name: 'Parveen',
      Date: '21 jun 2021',
      Time: '4:44PM',
      Guest: 4
    },
    {
      id: 2,
      code: '#595656',
      name: 'Gaurav',
      Date: '21 Aug 2021',
      Time: '5:44PM',
      Guest: 7
    }
  ]



  const Dialer = (phone) => {
    let phoneNumber = '+918987896798';
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phoneNumber}`;
    }
    else {
      phoneNumber = `tel:${phoneNumber}`;
    }
    Linking.openURL(phoneNumber)
  }
  return (
    <>

      <SafeAreaView style={Styles.container}>
        <View style={Styles.TopView}>
          <View style={Styles.TopTextView}>
            <Text style={Styles.TopText}>Reservation</Text>
          </View>
          <View style={Styles.Icon1}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
              <Entypo name='grid' size={33} color={'rgb(252,73,17)'} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {Data.map((item) => {
            return (
              <View style={Styles.ChildView}>
                <View>
                  {/* <View style={Styles.Code}>
            <Text style={Styles.CodeText}>{item.code}</Text>
          </View> */}
                  <View style={Styles.NameCallView}>
                    <View style={Styles.Name}>
                      <Text style={Styles.NameText}>{item.user.name}</Text>
                    </View>
                    <TouchableOpacity onPress={() => Dialer()}>
                      <View style={Styles.Call} >
                        <Text style={Styles.CallText}>Call</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.Date}>
                    <Text style={Styles.DateText}>Date:{item.booking_date}</Text>
                  </View>
                  {/* <View style={Styles.Time}>
            <Text style={Styles.TimeText}>Time:{item.booking_time}</Text>
          </View> */}
                  <View style={Styles.Time}>
                    <Text style={Styles.Guest}>Number of Guest:{item.no_of_guest}</Text>
                  </View>
                  <View style={Styles.Time}>
                    <Text style={Styles.Guest}>{item.massage}</Text>
                  </View>
                  <View style={Styles.TableCancel}>
                    <TouchableOpacity >
                      <View style={Styles.Cancel}>
                        <Text style={Styles.ConfirmedText}>Confirm</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={Styles.confirmed}>
                        <Text style={Styles.CancelText}>Reject</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.UnderLine}>
                    <Text
                      style={Styles.UnderLineText}
                    ></Text>
                  </View>
                </View>
              </View>
            )

          })}

        </ScrollView>

      </SafeAreaView>
      <View style={Styles.BackMainView}>
        <View style={Styles.MainView}>
          <TouchableOpacity onPress={() => props.navigation.replace('Menu')}>
            <View style={Styles.BackView}>
              <AntDesign name='arrowleft' color={'#fff'} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
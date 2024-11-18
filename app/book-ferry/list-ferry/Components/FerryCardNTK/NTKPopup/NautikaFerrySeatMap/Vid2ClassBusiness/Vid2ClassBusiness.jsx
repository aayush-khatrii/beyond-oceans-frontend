import NautikaFerryModel from '@/app/AppData/components/IconComponent/NautikaFerryModel'
import styles from './Vid2ClassBusiness.module.css'
import { useState } from 'react'
import SeatCard from '../SeatCard/SeatCard'
import { useEffect } from 'react'

export default function Vid2ClassBusiness({zoom, ferryData, tripData, selectedSeats, onFerrySeatSelect}) {

    const ferrySelectedClassSeats = ferryData[tripData.ferryClass.class_code]

    const getSeatNumber = (seat) => parseInt(seat.number.match(/\d+/)[0])

    const getRowPositions = (rowLetter, ranges) => {
        const rowSeats = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes(rowLetter));
        
        return ranges.map(([min, max]) => 
            rowSeats.filter(seat => {
                const seatNum = getSeatNumber(seat);
                return seatNum >= min && seatNum <= max;
            })
        );
    };

    const rowRanges = {
        A: [[1, 12]],                        // All four positions
        B: [[1, 12]],                        // Only first three positions
        C: [[5, 11]],                        // Only first two positions
        D: [[5, 11]],                        // All four positions
        E: [[5, 11]],      // Only two middle positions
        F: [[5, 11]],      // All four positions
        G: [[5, 11]],      // All four positions
        H: [[5, 11]],      // All four positions
        I: [[1, 2]],      // All four positions
        J: [[1, 12]],                        // All four positions
        K: [[1, 12]],                        // All four positions
    };

    const rowPositions = {};
    for (const [rowLetter, ranges] of Object.entries(rowRanges)) {
        rowPositions[rowLetter] = getRowPositions(rowLetter, ranges);
    }

    const rowAfirstPosition = rowPositions.A?.[0] || [];

    const rowBfirstPosition = rowPositions.B?.[0] || [];

    const rowCfirstPosition = rowPositions.C?.[0] || [];

    const rowDfirstPosition = rowPositions.D?.[0] || [];

    const rowEfirstPosition = rowPositions.E?.[0] || [];

    const rowFfirstPosition = rowPositions.F?.[0] || [];

    const rowGfirstPosition = rowPositions.G?.[0] || [];

    const rowHfirstPosition = rowPositions.H?.[0] || [];

    const rowIfirstPosition = rowPositions.I?.[0] || [];

    const rowJfirstPosition = rowPositions.J?.[0] || [];

    const rowKfirstPosition = rowPositions.K?.[0] || [];

    function selectSeat(seatItem){
        onFerrySeatSelect(seatItem)
    }


  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.ferryLayoutZoomWrapper} style={{ transform: `scale(${zoom})` }}>
                <div className={styles.seatLayout}>
                    <div className={styles.rowGrooup1}>
                        <div className={styles.rowA}>
                            <span className={styles.rowALable}>A</span>
                            <div className={`${styles.rowPosition} ${styles.AfirstPosition}`}>
                                {
                                    rowAfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowB}>
                            <span className={styles.rowBLable}>B</span>
                            <div className={`${styles.rowPosition} ${styles.BfirstPosition}`}>
                                {
                                    rowBfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowGrooup2}>
                        <div className={styles.rowC}>
                            <span className={styles.rowCLable}>C</span>
                            <div className={`${styles.rowPosition} ${styles.CfirstPosition}`}>
                                {
                                    rowCfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowD}>
                            <span className={styles.rowDLable}>D</span>
                            <div className={`${styles.rowPosition} ${styles.DfirstPosition}`}>
                                {
                                    rowDfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowE}>
                            <span className={styles.rowELable}>E</span>
                            <div className={`${styles.rowPosition} ${styles.EfirstPosition}`}>
                                {
                                    rowEfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowF}>
                            <span className={styles.rowFLable}>F</span>
                            <div className={`${styles.rowPosition} ${styles.FfirstPosition}`}>
                                {
                                    rowFfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowG}>
                            <span className={styles.rowGLable}>G</span>
                            <div className={`${styles.rowPosition} ${styles.GfirstPosition}`}>
                                {
                                    rowGfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowH}>
                            <span className={styles.rowHLable}>H</span>
                            <div className={`${styles.rowPosition} ${styles.HfirstPosition}`}>
                                {
                                    rowHfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowGrooup3}>
                        <div className={styles.rowI}>
                            <span className={styles.rowILable}>I</span>
                            <div className={`${styles.rowPosition} ${styles.IfirstPosition}`}>
                                {
                                    rowIfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowJ}>
                            <span className={styles.rowJLable}>J</span>
                            <div className={`${styles.rowPosition} ${styles.JfirstPosition}`}>
                                {
                                    rowJfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowK}>
                            <span className={styles.rowKLable}>K</span>
                            <div className={`${styles.rowPosition} ${styles.KfirstPosition}`}>
                                {
                                    rowKfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <NautikaFerryModel Icon="NautikaVID2ClassBusiness" />
            </div>
        </div>
    </div>
  )
}

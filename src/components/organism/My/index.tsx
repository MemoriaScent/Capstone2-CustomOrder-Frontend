"use client";
import MyItem from "@/components/molecule/MyItem";

const My = () => {
  return (
    <div className="flex flex-col items-center pt-100 pb-40">
      <div className="flex flex-row">
        <MyItem
          title="회원 정보"
          content="개인정보를 관리하는 공간입니다"
        ></MyItem>
        <MyItem
          title="주문 내역"
          content="주문하신 상품의 주문내역을 확인할 수 있는 공간입니다"
        ></MyItem>
      </div>
      <div className="flex flex-row">
        <MyItem
          title="문의 내역"
          content="문의 내역을 확인할 수 있는 공간입니다"
        ></MyItem>
        <MyItem
          title="내가 작성한 리뷰"
          content="리뷰 작성 내역을 확인할 수 있는 공간입니다"
        ></MyItem>
      </div>
    </div>
  );
};

export default My;

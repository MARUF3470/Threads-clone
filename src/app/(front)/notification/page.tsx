import DynamicBar from "@/components/common/DynamicBar";
import UserAvatar from "@/components/common/UserAvatar";
import { getNotifications } from "@/lib/serverMethods";
import { formateDate } from "@/lib/utils";
import { NotificationType } from "@/type";
import React from "react";

const NotificationPage = async () => {
  const notifications: Array<NotificationType> | [] = await getNotifications();
  return (
    <div>
      <DynamicBar title="Notification" />
      {notifications.length ? (
        notifications?.map((notification) => (
          <div key={notification.id} className="mt-5">
            <div className="flex gap-3">
              <UserAvatar name={notification.user.name} image="" />
              <div className="bg-muted w-full rounded-lg p-4">
                <div className="flex justify-between items-start w-full">
                  <p className="font-bold">{notification.user.name}</p>
                  <div className="flex">
                    <span className="mr-4 text-sm">
                      {formateDate(notification.created_at)}
                    </span>
                  </div>
                </div>
                <div>{notification.content}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center font-semibold">No notification found</h5>
      )}
    </div>
  );
};

export default NotificationPage;
